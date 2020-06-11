import * as React from "react";

import Template from "components/Template";
import Button from "components/examples/Button";

import Timer from "components/examples/Timer";
import Mouse from "components/examples/Mouse";
import Visible from "components/examples/Visible";
import Cookie from "components/examples/Cookie";
import Colors from "components/examples/Colors";
import Context from "components/examples/Context";
import { ResponsiveThing } from "components/examples/ResponsiveThing";

export default function render() {
  return (
    <Template>
      <span style={{ textAlign: "center" }}>
        <section style={{ padding: "60px" }}>
          <h1>Welcome to Monobase</h1>
          <p>A simple React based static site generator</p>
        </section>

        <Example title="ResponsiveThing">
          <ResponsiveThing />
        </Example>
        <Example title="Button">
          <Button />
        </Example>
        <Example title="Mouse Location">
          <Mouse />
        </Example>
        <Example title="Time">
          <Timer />
        </Example>
        <Example title="Visible">
          <Visible inset={100}>
            I'm like a refrigerator light. Or Schrödingers cat.
          </Visible>
        </Example>
        <Example title="Enter a color name">
          <Colors />
        </Example>
        <Example title="Persistent Cookie">
          <Cookie />
        </Example>
        <Example title="Contexts">
          <Context />
        </Example>
      </span>
    </Template>
  );
}

function Example(props) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 10px",
      }}
    >
      <h3
        style={{
          fontSize: 30,
          fontWeight: 700,
          margin: 0,
          paddingBottom: 40,
          lineHeight: 1,
        }}
      >
        {props.title}
      </h3>
      <div style={{ textAlign: "center" }}>{props.children}</div>
    </section>
  );
}
