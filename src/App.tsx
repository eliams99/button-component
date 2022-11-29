import React from "react";
import "./App.css";
import { Button, ButtonItem } from "./button/Button";
import { ReactComponent as ImgIcon } from "./button/umbrella.svg";

function App() {
  return (
    <div className="App">
      <div className="button-group">
        <p>Primary</p>
        <Button variant="primary">
          <ButtonItem>Primary Button</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>

        <Button variant="primary" disabled>
          <ButtonItem>Disabled Primary Button</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>
      </div>

      <div className="button-group">
        <p>Secondary</p>
        <Button variant="secondary">
          <ButtonItem>Secondary Button</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>

        <Button variant="secondary" disabled>
          <ButtonItem>Disabled Secondary Button</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>
      </div>

      <div className="button-group">
        <p>Custom colour</p>
        <Button variant="primary" classNames="green ciao">
          <ButtonItem>Primary</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>

        <Button variant="secondary" classNames="green">
          <ButtonItem>Secondary</ButtonItem>
          <ButtonItem>
            <ImgIcon />
          </ButtonItem>
        </Button>
      </div>
    </div>
  );
}

export default App;
