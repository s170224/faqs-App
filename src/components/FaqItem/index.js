// import Component from 'react'
import './index.css'

const FaqItem = props => {
  const {eachFaqs, onClickMinus, minus, isClicktrue, onClickPlus} = props

  const {id, questionText, answerText} = eachFaqs

  const OnClickButton = () => {
    onClickMinus(id)
  }
  //   const val = id ? 'true' : 'false'
  //   console.log(val)

  //   const minusButton = event => {
  //     onClickPlus(id)
  //   }

  return (
    <>
      <li className="li-container">
        <div className="faqsContainer">
          <div className="answerCon">
            <h1 className="heading2">{questionText}</h1>
            {isClicktrue ? <p className="para">{answerText}</p> : ''}
          </div>

          <button onClick={OnClickButton} className="button1">
            {isClicktrue ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
      </li>
      {/* )} */}
    </>
  )
}

export default FaqItem

// class FaqItem extends Component {
//   state = {click: true}

//   clickButton = () => {
//     this.setState(prevState => !prevState.click)
//   }

//   renderAnswer = () => {
//     const details = this.pros
//     const {answerText} = details
//     const {click} = this.state

//     if (click) {
//       return <p>{answerText}</p>
//     }
//     return null
//     // return <>if(click){<p>{answerText}</p>}</>
//   }

//   renderButterIcon = () => {
//     const {click} = this.state
//     const buttonImage = click
//       ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
//       : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
//     const alt = click ? 'minnus' : 'plus'

//     return (
//       <button onClick={this.clickButton}>
//         <img src={buttonImage} alt={alt} />
//       </button>
//     )
//   }

//   render() {
//     const details = this.props
//     const {questionText} = details
//     return (
//       <>
//         <li>
//           <h1>{questionText}</h1>
//           {this.renderButterIcon}
//         </li>

//         {this.renderAnswer}
//       </>
//     )
//   }
// }

// export default FaqItem
