var tl = new TimelineMax({onUpdate:updatePercentage}); //allows you to animate based on scroll position
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

//the y: window.innerHeight * (10 / 100) is equal to y: 10vh
tl.from('blockquote', .5, {y: window.innerHeight * (20 / 100) * -1, opacity: 0});

//the "=" stuff allows you to control how long certain animationa are
tl.from('span', 1, { width: 0}, "=-0.1");
tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

tl2.from("#box", 1, {opacity: 0, scale: 0});

//you can change the css using javascript; javascript uses camel-case instead of border-color for instance
//the 0,0,0 is for the rgb colors
//the 0.9 is for the opacity
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

//ScrollMagic = scroll animation library
const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave", //makes it so that the animation is based on the scroll position not time
            duration: "100%"
})
  .setPin(".sticky") //position fixed the sticky container
  .setTween(tl)
	.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
	.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}