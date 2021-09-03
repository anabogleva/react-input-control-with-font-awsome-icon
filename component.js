<div className="input-group">
  <i className="fa fa-user" />
  <input className="input-control" placeholder="Username"></input>
</div>;

/*
 scss section
*/
.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0 30px;

  i {
    color: black;
    font-size: 24px;
    margin-right: 12px;
  }

  .input-control {
    width: 98%;
    font-size: 16px;
    padding: 15px 0;
    border: 0;

    &:focus {
      outline-width: 0;
    }
  }
}