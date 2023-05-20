import './Quote.css';

export default function Quote() {
  return (
    <figure>
      <blockquote>
        When we are children we seldom think of the future. 
        This innocence leaves us free to enjoy ourselves as few adults can. 
        The day we fret about the future is the day we leave our childhood behind.
      </blockquote>
      <figcaption style={{ fontSize: '.8rem' }}>
        —Patrick Rothfuss, 
        <cite style={{ fontSize: '.8rem' }}>The Name of the Wind</cite>
      </figcaption>
    </figure>
  )
}