describe('Testing site rendering', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Successfully loads', () => {
    // Verify site loads...
    cy.visit('/')
  })
  // Verify each main component loads...

  it('Verify header loads', () => {
    cy.get('.ba-site-header').contains("about us", { matchCase: false })
    cy.get('.ba-site-header').contains("services", { matchCase: false })
    cy.get('.ba-site-header').contains("portfolio", { matchCase: false })
    cy.get('.ba-site-header').contains("contact us", { matchCase: false })
  })

  it('Verify main view loads', () => {
    cy.get('.jss1').contains("let's build amazing technology together.", { matchCase: false })
    cy.get('.jss1').within(() => {
      cy.get('.selected > .jss6 > a > img')
      cy.get('.MuiButtonBase-root').contains('discover your idea', { matchCase: false })
      cy.get('[href="#testimonials"]')
      cy.get('[href="/portfolio"]')
    })

  })

  it('Verify trusted section loads', () => {
    cy.get('.jss12').contains("trusted by", { matchCase: false })
    cy.get('.jss12').within(() => {
      cy.get('.slick-slider')
    })
  })

  it('Verify information section loads', () => {
    cy.get('.jss20').contains('client-focused', { matchCase: false })
  })

  it('Verify what we do section loads', () => {
    cy.get('.homeContainer').contains('what we do', { matchCase: false })
    cy.get('.homeContainer').within(() => {
      cy.get('.skills__list').contains('Business Automation', { matchCase: false })
      cy.get('.skills__list').contains('App Development', { matchCase: false })
      cy.get('.skills__list').contains('Software Consulting', { matchCase: false })
      cy.get('.skills__list').contains('Custom Software', { matchCase: false })
      cy.get('.skills__list').contains('Augmented Reality', { matchCase: false })
      cy.get('.skills__list').contains('UI/UX Design', { matchCase: false })
      cy.get('.skills__list').contains('Web Development', { matchCase: false })
      cy.get('.skills__list').contains('Alexa Development', { matchCase: false })
      cy.get('.skills__list').contains('BaseApp', { matchCase: false })
      cy.get('.skills__list').contains('Business Modeling', { matchCase: false })
      cy.get('.skills__list').contains('Data Analytics', { matchCase: false })
    })

    cy.get('.jss24').contains('BY US / FOR YOU', { matchCase: false })
    cy.get('[alt="Base App Logo"]', { matchCase: false })
    cy.get('[alt="Approved Logo"]', { matchCase: false })
  })

  it('Verify who we serve section loads', () => {
    cy.get('.jss33').contains('WHO WE SERVE')
    cy.get('.jss38').contains('Schedule a Free Consultation')

    cy.get('.iconHealth')
    cy.get('.jss34').contains('HEALTHCARE')
    cy.get('.iconBrokering')
    cy.get('.jss34').contains('BROKERING')
    cy.get('.iconConstruction')
    cy.get('.jss34').contains('CONSTRUCTION')
    cy.get('.iconBeautyWellness')
    cy.get('.jss34').contains('BEAUTY & WELLNESS')
    cy.get('.iconAccounting')
    cy.get('.jss34').contains('ACCOUNTING')
    cy.get('.iconFinancial')
    cy.get('.jss34').contains('FINANCIAL')

  })

  it('Verify innovative section loads', () => {
    cy.get('.projects').get('h2').contains('DELIVERING INNOVATIVE SOLUTIONS')

    cy.get('.projects > .row > .items > div > .projects__list > .projects__list__carousel > .slick-prev').click()
    cy.get('.projects > .row > .items > div > .projects__list > .projects__list__carousel > .slick-next').click()
    cy.get('.projects > .row > .items > div > .projects__list > .projects__list__carousel > .slick-list')
  })

  it('Verify enterprise guide form loads', () => {
    cy.get('.ba-home__cta').get('.ba-home__cta__description').contains('Enterprise Architecture Guide', { matchCase: false })
    // According to docs this should work.
    // Tested it in other browser and it works sometimes
    cy.get('#hubspotForm').within(() => {
      cy.get('[name="firstname"]').type('Perry')
      cy.get('[name="lastname"]').type('Platypus')
      cy.get('[name="company"]').type('TSL')
      cy.get('[name="email"]').type('perry@tsl.com')
      cy.get('[name="g-recaptcha-response"]')
      cy.get('[value="Get It Now →"]')
    })
    // This is a schrodinger's test... 
  })

  it('Verify awards section loads', () => {
    cy.get('.jss40').contains('AWARD')
    cy.get('.jss40').contains('WINNING COMPANY')

    cy.get('.jss39 > .slick-slider > .slick-list > .slick-track')
  })

  it('Verify testimonials section loads', () => {
    cy.get('.testimonialsOuterContainer > .jss51').contains('TESTIMONIALS')
    cy.get('.testimonialsOuterContainer > .sliderContainer > .slick-slider > .slick-prev').click()
    cy.get('.testimonialsOuterContainer > .sliderContainer > .slick-slider > .slick-next').click()
    cy.get('.testimonialsOuterContainer > .sliderContainer > .slick-slider > .slick-list')
  })

  it('Verify seen on section loads', () => {
    cy.get('.jss56').contains('SEEN ON')
    cy.get('.jss53').within(() => {
      cy.get('[alt="Miami Herald Logo"]')
      cy.get('[alt="DesignRush Logo"]')
      cy.get('[alt="Sun-Sentinel Logo"]')
      cy.get('[alt="Voyage MIA Logo"]')
    })
  })

  it('Verify footer loads', () => {
    cy.get('footer').within(() => {
      cy.get('.columns').contains('About Us')
      cy.get('.columns').contains('Contact Us')
      cy.get('.columns').contains('Let’s Get Social')
    })
  })

  it('Verify cookies bar loads', () => {
    cy.get('#hs-eu-cookie-confirmation')
  })
})