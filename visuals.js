// Utilizes hydra package for javascript to create visuals

//an explanation of the function and what each can do is found in the link https://hydra.ojack.xyz/functions/#functions/

/* To call the functions use keys shift + enter with the cursor in the line of the code
*/

// Declared patterns for the program-------------------------------------------------

//Each function creates a different pattern

//for all of the functions defined here, click on the functions
// then press control + enter

galaxy = () => voronoi(100,3,5).brightness(.5)
                  .modulateRotate(osc(.15,0.2,.1)
                    .kaleid(50).scale(0.5),15,0)
                    .mult(osc(50,-0.1,8)
                    .kaleid(9))
                  .out(o0) // the out() function renders the code on one of the channels of hydra
                  //by default hydra has 4 channels

//kaleidoscope movement in
movingKaleido = () => voronoi().color(0.5,1,1).kaleid(()=>6+Math.sin(time)*9).out(o1)

//when the divisions of the voronoi are small, they create particle systems

//particle system that looks like fireflies
fireflies = () => voronoi(20,4,5).color(120,2,0).brightness(0,200).out(o2)

waterCircle = () => shape(2).color(1,1,0.5)
                      .rotate(({time})=> (time%360)/2)
                      .modulate(osc(25,0.1,0.5)
                      .kaleid(50)
                      .scale(({time}) => Math.sin(time*1)*0.5+1)
                      .modulate(noise(0.6,0.5)),0.5)
                      .out(o3)


//Functions called

//for each of these functions, click on the location of the functions
// then press the keys control + enter

render(o0)
galaxy()


render(o1)
movingKaleido()

render(o2)
fireflies()

render(o3)
waterCircle()

render()



//stops the rendering
hush()
