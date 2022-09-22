import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div id="sunmoon">
      <NavBar />
      {props.children}
    </div>
  );
}
