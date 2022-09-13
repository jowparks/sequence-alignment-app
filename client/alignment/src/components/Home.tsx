import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { AlignmentToJSON } from "../generated-sources/openapi";
import { alignmentSearch, login } from "../services/api";


const Home: React.FC = () => {
  const [jsonDisplay, setJsonDisplay] = useState<Array<typeof ReactJson>>([])
  useEffect(() => {
    async function fetchMyAPI() {
      login('test', 'test') // Auth works
      const alignments = await alignmentSearch('AAAGAAATAGATAACAATTATGTCCTTA', ['NC_000852'])
      setJsonDisplay([AlignmentToJSON(alignments)])
    }
    fetchMyAPI()
    // const rows = [];
    // for (let i = 0; i < Object.keys(alignments).length; i++) {
    //   rows.push(<ReactJson src={alignments} collapsed={true} />);
    // }
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3><ReactJson src={jsonDisplay} collapsed={true} /></h3>
      </header>
    </div>
  );
};
export default Home;