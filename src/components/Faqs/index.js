import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {minus: false, activeIdList: []}

  onClickMinus = id => {
    const {faqsList} = this.props
    const {minus, activeIdList} = this.state
    const checkedValue = activeIdList.includes(id)

    if (checkedValue === false) {
      this.setState(prevState => ({
        activeIdList: [...prevState.activeIdList, id],
      }))
    } else {
      const filterActiveList = activeIdList.filter(each1 => each1.id === id)
      this.setState({activeIdList: filterActiveList})
      console.log(filterActiveList)
    }
  }

  render() {
    const {faqsList} = this.props
    const {minus, activeIdList} = this.state

    return (
      <div className="main-Con">
        <div className="sub-con">
          <h1 className="heading1">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                eachFaqs={eachItem}
                onClickMinus={this.onClickMinus}
                minus={minus}
                isClicktrue={activeIdList.includes(eachItem.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

// const Faqs = ({faqsList}) => {
//   return (
//     <>
//       <ul>
//         {faqsList.map(e => (
//           <FaqItem key={e.id} details={e} />
//         ))}
//       </ul>
//     </>
//   )
// }
// export default Faqs
