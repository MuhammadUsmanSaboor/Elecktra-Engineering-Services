interface PageHeaderProps {
  breadcrumb: string
  title: string
  subtitle: string
}

export default function PageHeader({ breadcrumb, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-[#172554] pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[13px] text-white/50">{breadcrumb}</p>
        <h1
          className="text-white font-bold mt-4"
          style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-1.5px',
          }}
        >
          {title}
        </h1>
        <p className="text-lg mt-4 max-w-[640px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
