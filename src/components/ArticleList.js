import Article from './Article'

function ArticleList () {
    return (
        <main>
            <Article title='Title1' date='January 31st, 2023' preview='preview this'/>
            <Article title='Title2' preview='preview this again'/>
            <Article title='Title3' date='July 30, 1996' preview='preview this again'/>
        </main>
    )
}

export default ArticleList;