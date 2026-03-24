import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { HiChevronDown } from 'react-icons/hi';
import './FAQ.css';

const faqs = [
  {
    question: 'Is hypnotherapy safe?',
    answer: 'Absolutely. Hypnotherapy is a well-established, non-invasive therapeutic technique recognized by medical and psychological communities worldwide. You remain fully conscious and in control throughout the entire session. There are no side effects, and it is suitable for most people.',
  },
  {
    question: 'Will I lose control during hypnosis?',
    answer: 'No. This is one of the most common misconceptions. During hypnotherapy, you are in a state of focused relaxation — similar to being absorbed in a book or movie. You can hear everything, you can stop at any time, and you will never do anything against your will or values.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'It varies depending on the individual and the issue being addressed. Many clients experience noticeable improvement within 3–5 sessions. Some issues may require fewer sessions, while deeply ingrained patterns may benefit from a longer course. We\'ll discuss a personalized plan during your first consultation.',
  },
  {
    question: 'Is hypnotherapy scientifically proven?',
    answer: 'Yes. There is a growing body of scientific research supporting the effectiveness of hypnotherapy for conditions including anxiety, chronic pain, insomnia, phobias, and habit change. It is recognized by organizations such as the American Psychological Association and the British Medical Association.',
  },
  {
    question: 'Can everyone be hypnotized?',
    answer: 'Most people can experience hypnosis to varying degrees. In fact, we all enter mild hypnotic states daily — when daydreaming, driving on autopilot, or getting lost in a task. Willingness and openness are the main factors. During your first session, we ensure you\'re comfortable with the process.',
  },
  {
    question: 'Can sessions be done online?',
    answer: 'Yes! Online sessions are just as effective as in-person ones. All you need is a quiet, comfortable space and a stable internet connection. Many clients actually prefer online sessions for the added comfort and convenience of being in their own environment.',
  },
];

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} onClick={toggle}>
      <div className="faq__question">
        <h4>{faq.question}</h4>
        <HiChevronDown className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`} />
      </div>
      <div className="faq__answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            We understand you might have questions. Here are answers to the most common ones.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="faq__list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
