const Footer = () => {
  return (
    <footer className="border-t border-line mt-20">
      <div className="max-w-content mx-auto px-6 md:px-0 py-8 flex flex-col md:flex-row justify-between gap-2 text-sm text-muted">
        <p>© {new Date().getFullYear()} Damilola Oniyide</p>
      </div>
    </footer>
  )
}

export default Footer
