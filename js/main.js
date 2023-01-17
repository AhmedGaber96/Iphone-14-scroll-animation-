gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.trigger1',
        strat:'top center',
        end:'bottom',
     
        scrub:1,
    }
}
);


tl.set('.iphone-image-wrapper',{scale:3,transformOrigin:"center top"})
.to('.iphone-image-wrapper',{scale:2,y:'-40%',duration:3})
.to('.iphone-image-wrapper',{scale:1,y:'0%',duration:3})



const ts = gsap.timeline({
    scrollTrigger:{
        trigger:'.trigger2',
        strat:'top center',
        end:'bottom center',
   
        scrub:1,
        pin:true,
    }
}
    

)
ts.to('.iphone1',{x:'-50%',duration:3})
.to('.iphone2',{x:'53%' ,duration:3,delay:-3})
.to('.iphone1-text',{x:'-30%' ,duration:3,delay:-3})
.to('.iphone2-text',{x:'30%' ,duration:3,delay:-3})
.to('.iphone1-text',{opacity:'1' ,duration:3,delay:-3})
.to('.iphone2-text',{opacity:'1' ,duration:3,delay:-3})

