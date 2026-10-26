
# How I Built a Reliable Job Alert System: Architecture & Trade-offs

**System Design · October 2026 · 7 min read**

Building a job search around multiple platforms can become repetitive. I wanted a way to collect relevant opportunities, filter out roles that did not match my preferences, and receive useful job listings without manually checking every source.

## Why I Built It

Searching for entry-level software engineering opportunities across different company career pages takes time. Each platform presents jobs differently, and many listings do not match the roles or locations I am targeting.

I built Personal Job Alerts to automate part of that process. The goal was to collect listings from multiple sources, apply consistent filtering rules, store jobs to track duplicates, and send a scheduled email digest.

## The Architecture

The system separates collection, filtering, persistence, and notification into distinct stages.

![Architecture of the Personal Job Alerts system](/Job-Alert-System-Architecture.png)

The workflow runs through GitHub Actions every six hours. Collectors retrieve job listings, the application normalizes and filters them, PostgreSQL stores job and notification records, and the notification process handles email digests.

A successful scheduled run does not, by itself, guarantee that an email reaches the recipient's inbox.

## 1. Collecting Jobs from Multiple Sources

I implemented separate collectors for supported sources, including Greenhouse, Lever, Workday, Ashby, Workable, and other career platforms.

Keeping source-specific collection logic separate makes it easier to handle differences in APIs, response formats, and pagination without putting every special case into one large function.

After collection, listings need a consistent representation. Normalizing fields such as job title, company, location, source, and job identifier allows the application to use common filtering and storage logic.

## 2. Filtering Relevant Opportunities

Collecting more jobs is not useful if most of them are irrelevant.

I configured the system around roles such as junior software engineering, graduate, frontend, backend, full-stack, and selected technical or project roles.

Location matching considers target markets including the UK, Ireland, Germany, the Netherlands, Canada, and relevant remote opportunities.

I also filter out seniority levels that do not match my search, including senior, staff, principal, lead, director, and executive roles. A remote label does not necessarily mean a job is open to applicants in every country.

## 3. Preventing Duplicate Listings

Scheduled collectors often encounter the same job across consecutive runs. Without deduplication, the database and email digest could fill up with repeated listings.

I use PostgreSQL to persist collected jobs and enforce uniqueness using the combination of the source and its job ID:

`UNIQUE(source, source_job_id)`

This is more reliable than depending only on job titles, which can change or be shared by different companies. The database constraint also protects against duplicate inserts when the same job is encountered more than once.

## 4. Why I Moved from SQLite to PostgreSQL

I started with SQLite during development because it was convenient for local testing. The application later needed a persistent database accessible to scheduled executions in the hosted workflow.

I moved to Neon PostgreSQL, allowing the workflow to share job and notification state across runs.

The trade-off is additional configuration, schema management, and connection-failure handling. SQLite is simpler for a small local application; PostgreSQL better fits this hosted, scheduled workflow.

## 5. Handling Email Notifications

Collecting and storing jobs is only part of the problem. The system also needs to track which notifications are pending and which have been processed.

I introduced notification status tracking and an email outbox. The outbox separates pending notification work from job collection and makes notification state easier to inspect.

I chose this approach instead of introducing a separate message broker. The project runs on a scheduled cadence and does not currently require the operational overhead of a more complex queueing system.

Recording a message as processed is not the same as proving that it reached an inbox. Email delivery can fail, and a process can stop between sending a message and updating its status. Stronger delivery handling requires careful retries, error reporting, and status transitions that account for these failure scenarios.

## 6. Why Run It Every Six Hours?

I configured GitHub Actions to run the collection workflow every six hours, with a manual trigger for testing and troubleshooting.

This is a deliberate trade-off. The system provides periodic updates rather than instant alerts. Running more frequently could reduce the delay before discovering new listings, but would also increase executions and requests to job sources.

## Trade-offs and Lessons Learned

Building the system helped me understand that reliability involves more than getting a workflow to run successfully.

- **Separate collectors:** Source-specific code is easier to maintain than one collector filled with provider-specific conditions.
- **Database constraints:** Deduplication belongs at the persistence layer as well as in application logic.
- **Persistent state:** Storing jobs and notification records makes scheduled runs easier to investigate.
- **Simple scheduling:** A six-hour schedule meets the current use case without requiring an always-running worker.
- **Honest delivery guarantees:** A successful workflow run should not be confused with guaranteed email delivery.

## What I Would Improve Next

My next improvements would focus on observability and failure recovery: clearer per-source collection results, better visibility into failed email attempts, and retry behavior that avoids unnecessarily sending the same notification more than once.

I would also strengthen automated tests around duplicate jobs, partially failed runs, and notification state transitions.

## Final Thoughts

Personal Job Alerts started as a way to reduce repetitive job searching, but it became a practical exercise in building a scheduled data pipeline. It brought together API integrations, filtering, relational database design, deduplication, and notification processing.

The biggest lesson for me is that reliability comes from designing for repeated execution and failure, not just from making the first successful run happen.

[View the project on GitHub](https://github.com/LolaVictoria/Job-Portal)
