type Props = { 
  params: Promise<{ slug: string }> 
}

export default async function DynamicPage({ params }: Props) {
  // Await the params before using them
  const { slug } = await params
  
  function formatCompany(slug: string) {
    return slug.charAt(0).toUpperCase() + slug.slice(1)
  }
  
  const company = formatCompany(slug)

  return (
    <div>
      <h1>I am excited to be applying to {company}!</h1>
      <p>
        I am passionate about technology and believe my skills can make a strong impact at {company}. As a fast learner and problem solver, I am ready to contribute to your teams goals and drive innovation.
      </p>
      <p>
        I would love to discuss how my background in software development, teamwork, and adaptability can benefit {company} and your mission.
      </p>
    </div>
  )
}
