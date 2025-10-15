import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";

import TemplateLiterals from "./TemplateLiterals";

import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";

import House from "./House";
import JsonStringify from "./JsonStringify";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

import Spreading from "./Spreading";

import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";

import Classes from "./Classes";
import Styles from "./Styles";

import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

import PathParameters from "./PathParameters";

function Lab3() {
  return (
    <div>
      <h1>Lab 3</h1>
      <h2 style={{ color: "red" }}>Variables</h2>
      <VariablesAndConstants />
      <br />
      <VariableTypes />
      <br />
      <BooleanVariables />
      <br />
      <IfElse />
      <br />
      <TernaryOperator />
      <br />
      <ConditionalOutputIfElse />
      <br />
      <ConditionalOutputInline />
      <br />
      <br />
      <br />
      <h2 style={{ color: "red" }}>Function Exercises</h2>
      <LegacyFunctions />
      <br />
      <ArrowFunctions />
      <br />
      <ImpliedReturn />
      <br />
      <br />
      <h2 style={{ color: "red" }}>String Interpolation</h2>
      <TemplateLiterals />
      <br />
      <br />
      <h2 style={{ color: "red" }}>JavaScript Arrays</h2>
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />
      <br />
      <br />
      <h2 style={{ color: "red" }}>JavaScript Objects</h2>
      <House />
      <JsonStringify />
      <TodoItem />
      <TodoList />
      <br />
      <br />
      <h2 style={{ color: "red" }}>Spreader</h2>
      <Spreading />
      <br />
      <br />
      <h2 style={{ color: "red" }}>Destructing</h2>
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <br />
      <br />
      <h2 style={{ color: "red" }}>HTML Classes</h2>
      <Classes />
      <br />
      <br />
      <h2 style={{ color: "red" }}>HTML Styles</h2>
      <Styles />
      <br />
      <br />
      <h2 style={{ color: "red" }}>Parameterized Components</h2>
      <Add a={3} b={4} />
      <br />
      <br />
      <h2 style={{ color: "red" }}>Children Components</h2>
      <h4>Square of 4</h4>
      <Square> 4 </Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <br />
      <br />
      <h2 style={{ color: "red" }}>Path Parameters</h2>
      <PathParameters />
      <br />
      <br />
    </div>
  );
}
export default Lab3;
