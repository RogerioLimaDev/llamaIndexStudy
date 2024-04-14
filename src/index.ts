import * as LlamaIndex from "../node_modules/llamaindex";

try {
    Main()

} catch (error) {
    console.log("Error: ${error}");
}


async function Main() 
{
    const documents = await new LlamaIndex.SimpleDirectoryReader()
        .loadData({directoryPath: "./data"})

    const index = await LlamaIndex.VectorStoreIndex.fromDocuments(documents)
    
    const queryEngine = index.asQueryEngine()
    
    const response = await queryEngine.query({
        query: "What did the author do in college?"
    })
    console.log(response.toString())
}







