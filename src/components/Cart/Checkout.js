import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Your City</label>
        <input type="text" id="city" />
      </div>
      <button onClick={props.onCancel} type="button">
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
