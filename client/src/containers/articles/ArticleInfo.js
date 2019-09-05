import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticle, deleteArticle } from '../../actions/index';
import CommentList from '../comments/CommentList';
import CommentAdd from '../comments/CommentAdd';

class ArticleInfo extends Component {
  
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  

  render() {
    const article = this.props.article;
    return (
      <div>
        <h2>{article.id}: {article.title}</h2>
        <p>{article.content}</p>
        <div className="btn-group">
          <Link to={{ pathname: `/articles/${article.id}/edit`, state: { article: article }}} className="btn btn-info">Edit</Link> 
          <button onClick={() => this.props.deleteArticle(article.id)} className="btn btn-danger" type="button">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </div>
        <hr/>
        <CommentAdd />
        <CommentList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article
});
const mapDispatchToProps = { getArticle, deleteArticle}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);


