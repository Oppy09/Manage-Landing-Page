# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

Bright Red: hsl(12, 88%, 59%)
Dark Blue: hsl(228, 39%, 23%)

### Neutral

Dark Grayish Blue: hsl(227, 12%, 61%)
Very Dark Blue: hsl(233, 12%, 13%)
Very Pale Red: hsl(13, 100%, 96%)
Vary Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro)
- Weights: 400, 500, 700

## Icons

For the social icons, you can use the icons provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
















































/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;
    color: hsl(227, 12%, 61%);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
main{
    background-image: url(./images/bg-tablet-pattern.svg);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}
p{
    line-height: 2;
    margin: 2rem 0;
}
header{
    color: hsl(228, 39%, 23%);
}
button{
    padding: 1rem;
    border-radius: 30px;
    width: 10rem;
    background-color: hsl(12, 88%, 59%);
    border: 1px solid transparent;
    color: hsl(0, 0%, 98%);
    font-weight: 700;
    cursor: pointer;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: hsl(228, 39%, 23%);
}
div#nav-bar{
    width: 80%;
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
}
div.sections > ul{
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
}
div.button > button{
    width: 8rem;
    padding: .75rem;
}
div.top-container{
    height: calc(100vh - 3rem);
    width: 80%;
}
section#product{
    display: flex;
    justify-content: space-between;
}
div.product-description{
    padding: 5rem 0;
    max-width: 50%;
    display: flex;
    flex-direction: column;
}
div.product-description > div.details{
    width: 80%;
}
div.product-description > div.details > header > h1{
    font-size: 3rem;
}
div.product-details > p{
    max-width: 63%;
}
div.details button{
    width: 7rem;
    padding: .75rem;
}
div.middle-container{
    height: 100vh;
    width: 80%;
    margin: 5rem 0;
}
section#about-us{
    display: flex;
    gap: 5rem;
    height: 100%;
}
section#about-us > div.activity{
    padding: 1rem 0;
}
section#about-us > div.activity > header > h2{
    font-size: 2rem;
}
section#about-us > div.activity > div.details{
    max-width: 70%;
}
div.activity-details{
    padding: 2rem;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
div.activity-details div.bullets{
    background-color: hsl(12, 88%, 59%);
    border-radius: 30px;
    width: 5rem;
    height: 2.5rem;
    position: relative;
    bottom: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(0, 0%, 98%);
}
div.activity-details .progress-tracking{
    display: flex;
    gap: 1rem;
}
div.activity-details .built-in-reports{
    display: flex;
    gap: 1rem;
}
div.activity-details .organization{
    display: flex;
    gap: 1rem;
}
div.description{
    width: 80%;
}
div.bottom-container{
    text-align: center;
    position: relative;
}
section#careers{
    display: flex;
}
div.testimonials{
    margin: 2rem;
    background-color: hsl(0, 0%, 98%);
}
div.testimonials > figure > img{
    max-width: 10%;
    position: relative;
    bottom: 1.5rem;
}
div.testimonials > div.details{
    margin: 0 auto;
    padding: 0 1rem;
}
button.submission{
    width: 8rem;
    margin: 2rem 0;
}
section#pricing{
    width: 100%;
    background-color: hsl(12, 88%, 59%);
    padding: 3.5rem;
    margin-top: 7rem;
    display: flex;
    align-items: center;
}
section#pricing > div.pricing-details{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
}
div.text{
    text-align: left;
    width: 40%;
}
div.text > header > h2{
    font-size: 2.5rem;
    color: hsl(0, 0%, 98%);
}
section#pricing button{
    background-color: hsl(0, 0%, 98%);
    color: hsl(12, 88%, 59%);
}
footer{
    width: 100%;
    padding: 3rem;
    background-color: hsl(233, 12%, 13%);
    display: flex;
    flex-direction: column;
}
section#community{
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
}
div.socials{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}
div.icons{
    display: flex;
    gap: .75rem;
}
section#community > div.section-links{
    display: flex;
    justify-content: space-between;
    gap: 5rem;
}
div.links > ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
div.links > ul > li > a{
    color: hsl(0, 0%, 98%);
}
div.subscription{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
input{
    padding: .5rem;
    width: 12rem;
    border-radius: 30px;
    border: 1px solid transparent;
    color: hsl(227, 12%, 61%);
    font-weight: 700;
}
input.go{
    padding: .5rem;
    width: 3rem;
    height: 2rem;
    background-color: hsl(12, 88%, 59%);
    color: hsl(0, 0%, 98%);
}
div.attribution{
    text-align: center;
    margin-top: 3rem;
}
div.attribution > a{
    color: blue;
}

 */

/**************ACTIVE STATES*************/
/* button:hover{
    opacity: 0.5;
}
div.sections > ul > li > a:hover{
    color: hsl(227, 12%, 61%);
}
input:hover{
    background-color: hsl(0, 0%, 98%);
    border: 1px solid hsl(12, 88%, 59%);
}
input.go:hover{
    opacity: 1;
    color: hsl(12, 88%, 59%);
} */
/* div.mobile-sc{
    display: none;
}
.nav-btn{
    display: none;
}
section#careers{
    display: none;
} */



/*************MEDIA QUERY***********/

/* @media screen and (max-width: 400px) {
    body{
        width: 100%;
        height: 100%;
    }
    main{
        width: 100%;
        height: 100%;
        background: none;
    }
    div#navbar{
        width: 100%;
        justify-content: space-between;
        align-items: start;
        justify-content: start;
    }
    div.top-container{
        height: fit-content;
    }
    section#product{
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
    div.product-illustration{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.product-illustration > figure > img{
        max-width: 100%;
        height: auto;
    }
    div.product-description{
        max-width: 100%;
        padding: 0;
        flex-direction: row;
        text-align: center;
    }
    div.product-description > div.details{
        width: 100%;
    }
    div.product-description > div.details > header > h1{
        font-size: 2.2rem;
    }
    div.product-details > p{
        max-width: 100%;
    }
    div.middle-container{
        height: fit-content;
        width: 100%;
        margin-top: 5rem;
    }
    section#about-us{
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    section#about-us > div.activity{
        padding: 0;
    }
    section#about-us > div.activity > header > h2{
        font-size: 1.5rem;
    }
    section#about-us > div.activity > div.details{
        max-width: 100%;
        padding: 1rem;
    }
    div.activity-details{
        max-width: 100%;
        padding: .5rem;
        justify-content: start;
    }
    div.description header{
        background-color: hsl(13, 100%, 96%);
    }
    div.description header h3{
        font-size: 1rem;
    }
    div.description > div.details{
        width: 100%;
        text-align: left;
    }
    section#pricing{
        flex-direction: column;
        width: 100%;
    }
    div.pricing-details{
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
    div.pricing-details .text{
        text-align: center;
        width: 50%;
        margin: 2rem 0;
    }
    div.pricing-details .text header h2{
        font-size: 2.5rem;
        font-weight: 500;
    }
    footer{
        padding: 2rem 0;
    }
    section#community{
        flex-direction: column-reverse;
    }
    section#careers{
        flex-direction: column;
    }
    div.mobile-sc{
        display: block;
    }
    div.button{
        display: block;
    }
} */