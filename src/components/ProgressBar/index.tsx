const ProgressBar: React.FC = (): JSX.Element => {
  return(
    <div className="progress-bar">
      <h2 className="progress-bar__title">Accuracy</h2>

      <div className="progress-bar__outer">
        <div className="progress-bar__inner">
          <div className="progress-bar__percent">
            <h3 className="progress-bar__quantity">79</h3>
            <span className="progress-bar__percentage-sign">%</span>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          className="progress-bar__circle"
          cx="80" cy="80" r="54"
          style={{ strokeDashoffset: "calc(357 - (79 * 357) / 100)" }}  />
      </svg>
    </div>
  )
}

export { ProgressBar }