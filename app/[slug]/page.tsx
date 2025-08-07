interface PageProps {
  params: {
    slug: string
  }
}

// Helper to auto-format company name (optional)
function formatCompany(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1)
}

export default function DynamicPage({ params }: PageProps) {
  const company = formatCompany(params.slug)

  return (
    <div>
      <h1>Im excited to be applying to {company}!</h1>
      <p>
        I am passionate about technology and believe my skills can make a strong impact at {company}. As a fast learner and problem solver, I am ready to contribute to your teams goals and drive innovation.
      </p>
      <p>
        I would love to discuss how my background in software development, teamwork, and adaptability can benefit {company} and your mission.
      </p>
    </div>
  )
}
