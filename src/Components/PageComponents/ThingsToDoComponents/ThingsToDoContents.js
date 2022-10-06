import AddThingsToDo from './AddThingsToDo'
import classes from './ThingsToDoContents.module.css'

function ThingsToDoContents() {
  return (
    <div className = {classes.thingsToDoContainer}>
        <div className = {classes.topContainer}>
            <span>THINGS TO DO IN SRI-LANKA</span>
        </div>
        
        <div className = {classes.thingsToDoIntroContainer}>
            <div className = {classes.introHead}>
                Things to do in Sri-Lanka to enjoy your tour
            </div>
            <div className = {classes.introParagraph}>
                Although Sri-Lanka is a small island in the Indian Ocean, there are so many activities and traditions
                you can have to enjoy the tour in Sri-Lanka. We have beautiful beaches to surf and scuba diving, 
                mountains for hiking and camping, climb rocks, explore cities and beautiful destinations,
                wildlife safaris, casinos, train tours, bicycle rides, zoo, water rafting, hot air balloning,
                snorkelling, kite surfing, waterfalls, food traditons and many more. 
            </div>
        </div>

        <div className = {classes.mapouter}>
            <div className={classes.gmap_canvas}>
                <iframe width="1009" height="435" id="gmap_canvas" src="https://maps.google.com/maps?q=sri%20lanka&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>

        <div className = {classes.toDoActivitiesContainer}>
            <div className = {classes.activityHeader}>Surfing</div>
            <div className = {classes.activityImage}>
                <img src = 'https://goodstorysurf.com/app/img/step_6.jpg' alt = '' />
            </div>
            <div className = {classes.activityParagraph}>uifhsdkcnsdiuc weiedf jwe weoiefdd jweef w 
            efjm nwe ef  j fkojwjf er9f fcer m eriorfk er  dmme  e9fkerfer erfer9 f   reg efgfjerjg
            df diov dfvh df vndffvh eerjerfg jre oerih ev e vfervnef v heverv erf ejfsfjhfefjh er  
             ifjr  ivjdvfdv dfvfd v dfvfd v</div>

        </div>

    </div>
  )
}

export default ThingsToDoContents
