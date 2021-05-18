import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            logo: 'logo.svg',
            menu: ['home', 'shop', 'about', 'contact'],
            slides: {
                position: 0,
                info: [
                    {
                        link: require('@/assets/desktop-image-hero-1.jpg'),
                        title: "Discover innovative ways to decorate",
                        bio: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.' 
                    }, 
                    {   
                        link: require('@/assets/desktop-image-hero-2.jpg'),
                        title: 'We are available all across the globe',
                        bio: "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",                 
                    }, 
                    {
                        link: require('@/assets/desktop-image-hero-3.jpg'),
                        title: 'Manufactured with the best materials',
                        bio:  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
                    },  
                ]
            },
            shop: ['Shop Now', 'icon-arrow.svg'],
            slider: ['icon-angle-left.svg', 'icon-angle-right.svg'],
            about: {
                images: [
                    require('@/assets/image-about-dark.jpg'), 
                    require('@/assets/image-about-light.jpg')
                ],
                title: 'About our furniture',
                bio: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."
            },
            mobile: [
                require('@/assets/icon-hamburger.svg'),
                require('@/assets/icon-close.svg')
            ],
            isMobileOpen: false
        }
    },
    getters: {
        logo(state) {
            return state.logo
        },
        menu(state) {
            return state.menu
        },
        slides(state) {
            return state.slides
        },
        shop(state) {
            return state.shop
        },
        slider(state) {
            return state.slider
        },
        about(state) {
            return state.about
        },
        mobile(state) {
            return state.mobile
        },
        isMobileOpen(state) {
            return state.isMobileOpen
        }
    },
    mutations: {
        leftSlide(state) {
            let pos = state.slides.position

            state.slides.position = pos + 100

            if (pos >= 0) {
                state.slides.position = -200
                state.slides.info[0].title = state.slides.info[2].title
                state.slides.info[0].bio = state.slides.info[2].bio
            }

            if (pos === -100) {
                state.slides.info[0].title = "Discover innovative ways to decorate"
                state.slides.info[0].bio ='We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.' 
            }

            if (pos === -200) {
                state.slides.info[0].title = state.slides.info[1].title
                state.slides.info[0].bio = state.slides.info[1].bio
            }
 
            console.log(pos)

 
         },
        rightSlide(state) {
           let pos = state.slides.position

                 

           state.slides.position = pos - 100

           if (pos === 0) {
            state.slides.info[0].title = state.slides.info[1].title
            state.slides.info[0].bio = state.slides.info[1].bio
         }

          if (pos === -100) {
            state.slides.info[0].title = state.slides.info[2].title
            state.slides.info[0].bio = state.slides.info[2].bio
          }

          if (pos === -200) {
            state.slides.position = 0
            state.slides.info[0].title = "Discover innovative ways to decorate"
            state.slides.info[0].bio ='We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.' 
          }

          console.log(pos)
        },

        openMobile(state) {
            state.isMobileOpen = !state.isMobileOpen

            console.log(state.isMobileOpen)

        }

    },
    actions: {
        leftSliding(context) {
            context.commit('leftSlide')
        },
        rightSliding(context) {
            context.commit('rightSlide')
        },
        clickOpenMobile(context) {
            context.commit('openMobile')
        }
    }


})

export default store