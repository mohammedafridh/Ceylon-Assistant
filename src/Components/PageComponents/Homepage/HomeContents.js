import classes from './HomeContents.module.css'

function HomeContents() {
  return (
    <div>
      <div className = {classes.contentsContainer}>
            <div className = {classes.introContainer}>
                <div className = {classes.introduction}>
                    <h2>Ceylon Assistant Guides</h2>
                    <p>"We have the best tour guides with an in-depth knowledge 
                        on Sri-Lanka". All our guides are ready to provide you with the best experiences.
                        </p>

                </div>
            </div>
      </div>
    </div>
  )
}

export default HomeContents