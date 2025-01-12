import {
  dTitle,
  dText,
} from "./Description.module.css";

const Description = () => {

  return (
      <>
      <h1 className={dTitle}>Sip Happens Café</h1>
      <p className={dText}>Please leave your feedback about our service by selecting one of the options below.</p>
      </>
  )
}

export default Description