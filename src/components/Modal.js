import { useState } from "react";
import ReactDOM from "react-dom";
import ErrorContainer from "./ErrorContainer";
import "./modal.css";

const Modal = ({ open, title, close, user, setUsers, users }) => {
  const { name, email, website, phone } = user[0];
  const [state, setState] = useState({
    name,
    email,
    phone,
    website,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    let tempUsers = [];
    for (let idx = 0; idx < users.length; idx++) {
      if (users[idx].id === user[0].id) {
        tempUsers[idx] = {
          ...users[idx],
          name: state.name,
          email: state.email,
          phone: state.phone,
          website: state.website,
        };
      } else tempUsers[idx] = users[idx];
    }
    setUsers(tempUsers);
    close();
  };

  return ReactDOM.createPortal(
    <>
      {open ? (
        <div className="modalContainer" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <button className="close" onClick={close}>
                X
              </button>
            </header>
            <main className="modal_content">
              <div className="context">
                <div>
                  <label htmlFor="name">
                    <span class="red">*</span> Name:
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={onChange}
                    className={!state.name ? "border-red" : ""}
                    required
                  />
                  {!state.name && <ErrorContainer />}
                </div>
              </div>
              <div className="context">
                <div>
                  <label htmlFor="email">
                    <span class="red">*</span> Email:{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    className={!state.email ? "border-red" : ""}
                    required
                  />
                  {!state.email && <ErrorContainer />}
                </div>
              </div>
              <div className="context">
                <div>
                  <label htmlFor="phone">
                    <span class="red">*</span> Phone:{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={state.phone}
                    className={!state.phone ? "border-red" : ""}
                    onChange={onChange}
                    required
                  />
                  {!state.phone && <ErrorContainer />}
                </div>
              </div>
              <div className="context">
                <div>
                  <label htmlFor="website">
                    <span class="red">*</span> Website:{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={state.website}
                    className={!state.website ? "border-red" : ""}
                    onChange={onChange}
                    required
                  />
                  {!state.website && <ErrorContainer />}
                </div>
              </div>
            </main>
            <footer className="modal_footer">
              <button
                className="submit"
                onClick={handleSubmit}
                disabled={
                  !state.name || !state.email || !state.phone || !state.website
                }
              >
                Submit
              </button>
              <button className="modal-close" onClick={close}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
