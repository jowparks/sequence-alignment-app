import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { alignmentList, alignmentSearch, login } from "../services/api";


const Home: React.FC = () => {
  const [jsonDisplay, setJsonDisplay] = useState<Array<typeof ReactJson>>([])
  const [searchSequence, setSearchSequence] = useState<string>('')
  const [searchGenomes, setSearchGenomes] = useState<Array<string>>([])
  useEffect(() => {
    setInterval(() => {
      fetchAlignments();
    }, 5000);
  }, []);
  async function fetchAlignments() {
    login('test', 'test') // Auth works
    const alignments = await alignmentList()
    setJsonDisplay(alignments as any)
  }
  async function doAlignmentSearch() {
    login('test', 'test') // Auth works
    const alignment = await alignmentSearch(searchSequence, searchGenomes)
    setJsonDisplay([alignment as any].concat(jsonDisplay))
  }
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    doAlignmentSearch();
  }

  return (
    <div className="container">
      <header className="jumbotron">
      <form onSubmit={handleSubmit}>
        <label>Enter DNA Search Sequence (i.e. AAAGAAATAGATAACAATTATGTCCTTA):<br />
          <input
            type="text" 
            onChange={(e) => setSearchSequence(e.target.value)}
          />
        </label>
        <br />
        <label>Enter comma separated search genomes (i.e. NC_000852,NC_007346,NC_008724):<br />
          <input
            type="text" 
            onChange={(e) => setSearchGenomes(e.target.value.split(',').map( i => i.trim()))}
          />
        </label>
        <br />
        <input type="submit"  />
      </form>
        <h3><ReactJson src={jsonDisplay} collapsed={1} /></h3>
      </header>
    </div>
  );
};
export default Home;