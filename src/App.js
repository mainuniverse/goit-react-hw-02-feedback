import { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
//import Notification from './components/Notification/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    handleClick = feedbackName => {
    this.setState(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };
 ;

//   handleClick = event => {
// const { name } = event.currentTarget;
// this.setState(prevState => ({ [name]: prevState[name] + 1}));
// };

  countTotalFeedback = () => {
     const { good, neutral, bad } = this.state;
        return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
           const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
  };
  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
