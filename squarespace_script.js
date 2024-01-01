var tl = gsap.timeline();

tl.from("#navp1 img , #navp2 h4 , #navp3 h4 , #navp3 button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})

tl.from("#content h1",{
    y:400,
    delay:0.5,
    opacity: 0,
    duration: 1,
    stagger:0.2,
})

gsap.from("#image1, #image2",{
    x:-150,
    opacity:0,
    duration:0.5,
    delay:0.5,

})

gsap.from("#image3, #image4",{
    x:150,
    opacity:0,
    duration:0.5,
    delay:0.5,

})

tl.from("#scroll",{
    y:-30,
    repeat:-1,
    duration:0.5,
    delay:0.5,
    yoyo:true,
})