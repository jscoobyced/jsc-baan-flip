interface StatsProps {
  statsOrganizations: string
  statsOrganizationsLabel: string
  statsProperties: string
  statsPropertiesLabel: string
  statsMoney: string
  statsMoneyLabel: string
  statsExperts: string
  statsExpertsLabel: string
}

const Stats = ({
  statsOrganizations,
  statsOrganizationsLabel,
  statsProperties,
  statsPropertiesLabel,
  statsMoney,
  statsMoneyLabel,
  statsExperts,
  statsExpertsLabel,
}: StatsProps) => {
  return (
    <section
      className="bg-secondary py-15 px-4 mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-8"
      role="list"
    >
      <div role="listitem">
        <div className="text-4xl font-bold text-secondary-foreground mb-2">
          {statsOrganizations}
        </div>
        <div className="text-secondary-foreground">
          {statsOrganizationsLabel}
        </div>
      </div>
      <div role="listitem">
        <div className="text-4xl font-bold text-secondary-foreground mb-2">
          {statsProperties}
        </div>
        <div className="text-secondary-foreground">{statsPropertiesLabel}</div>
      </div>
      <div role="listitem">
        <div className="text-4xl font-bold text-secondary-foreground mb-2">
          {statsMoney}
        </div>
        <div className="text-secondary-foreground">{statsMoneyLabel}</div>
      </div>
      <div role="listitem">
        <div className="text-4xl font-bold text-secondary-foreground mb-2">
          {statsExperts}
        </div>
        <div className="text-secondary-foreground">{statsExpertsLabel}</div>
      </div>
    </section>
  )
}

export default Stats
