import * as React from 'react';

function ControlPanel(props) {
    const { year } = props;
    const month = year.toString()
    console.log(typeof (year))
    console.log(typeof (month))
    return (
        <div className="control-panel">
            <p>
                Hatecrime number by state in month <b></b>. <hr /> Hover over a state to
                see details.
      </p>


            <hr />

            <div key={'year'} className="input">
                <label>Month {month.slice(-2)}</label>
                <input
                    type="range"
                    value={year}
                    min={2001}
                    max={2012}
                    step={1}
                    onChange={evt => props.onChange(evt.target.value)}
                />
            </div>
        </div>
    );
}

export default React.memo(ControlPanel);