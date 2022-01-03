import "./footer.scss";

import { GitHub } from "@material-ui/icons";

export default function footer() {
  return (
    <div className="wrapper">
      <div className="left">
        <GitHub className="icon" />
        <span>GitHub</span>
      </div>
    </div>
  );
}
