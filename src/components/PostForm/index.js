import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../../redux/actions";
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
    this.props.hideAlert();
  };
  changeInputHandler = (e) => {
    e.persist();
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Заголовок поста
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              onChange={(e) => {
                this.changeInputHandler(e);
              }}
              name="title"
            />
          </div>
          {this.props.alert ? (
            <div className="alert alert-warning" role="alert">
              {this.props.alert}
            </div>
          ) : (
            ""
          )}
          <button className="btn btn-success" type="submit">
            Создать
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.appReducer.alert,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (payload) => dispatch(showAlert(payload)),
    hideAlert: (payload) => dispatch(hideAlert(payload)),
    createPost: (payload) => dispatch(createPost(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
