import { contentManager } from '../../services/ContentManager'

interface AboutUsProps {
  contentManager: typeof contentManager
}

export const AboutUs = ({ contentManager }: AboutUsProps) => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-foreground mb-4">
          {contentManager.getContent('about_us_title')}
        </h1>
        <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
          {contentManager.getContent('about_us_mission_content')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            {contentManager.getContent('about_us_mission_title')}
          </h2>
          <p className="text-secondary-foreground mb-4">
            {contentManager.getContent('about_us_mission_content')}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            {contentManager.getContent('about_us_problem_title')}
          </h2>
          <p className="text-secondary-foreground mb-4">
            {contentManager.getContent('about_us_problem_content')}
          </p>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          {contentManager.getContent('about_us_approach_title')}
        </h2>
        <p className="text-secondary-foreground mb-6">
          {contentManager.getContent('about_us_approach_content')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">1</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {contentManager.getContent('about_us_values_title')}
          </h3>
          <p className="text-secondary-foreground">
            {contentManager.getContent('about_us_values_content')}
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">2</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {contentManager.getContent('about_us_team_title')}
          </h3>
          <p className="text-secondary-foreground">
            {contentManager.getContent('about_us_team_content')}
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">3</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {contentManager.getContent('about_us_join_title')}
          </h3>
          <p className="text-secondary-foreground">
            {contentManager.getContent('about_us_join_content')}
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">4</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {contentManager.getContent('about_us_innovation_title')}
          </h3>
          <p className="text-secondary-foreground">
            {contentManager.getContent('about_us_innovation_content')}
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-xl">5</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {contentManager.getContent('about_us_community_title')}
          </h3>
          <p className="text-secondary-foreground">
            {contentManager.getContent('about_us_community_content')}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-primary hover:bg-primary-700 text-primary-foreground font-bold py-3 px-8 rounded-full transition-colors duration-300">
          {contentManager.getContent('about_us_contact_button')}
        </button>
      </div>
    </section>
  )
}
