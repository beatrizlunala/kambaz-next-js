export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        value="The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. THe landing page should include
        of the following: Your full name and section Links to each of the lab
        assignments Link to all relevant source code repositories The Kambas
        application should include a link to navigate back to the landing page"
      ></textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points </label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group </label>
          </td>
          <select defaultValue="ASSIGNMENTS" id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="ADD">ADD NEW GROUP</option>
          </select>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
          </td>
          <select defaultValue="Percentage" id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type </label>
          </td>
          <select defaultValue="Online" id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="InPerson">In Person</option>
          </select>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-submission-type">Online Entry Options</label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-checkbox-websiteurl"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="wd-submission-type"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Upload</label>
              <br />
            </td>
          </tr>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <input id="wd-assign-to" defaultValue="Everyone"></input>
            </td>
          </tr>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <input defaultValue="2026-05-13" type="date" id="wd-due-date" />
            </td>
          </tr>
        </tr>

        <tr>
          <td align="right" valign="top"></td>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top">
              <input
                defaultValue="2026-05-06"
                type="date"
                id="wd-available-from"
              />
            </td>
            <td align="left" valign="top">
              <input
                defaultValue="2026-05-20"
                type="date"
                id="wd-available-until"
              />
            </td>
          </tr>
        </tr>
      </table>
      <hr></hr>
      <table width="100%">
        <tr>
          <td></td>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
