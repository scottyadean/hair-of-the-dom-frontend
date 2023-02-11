import React from "react";
class PostForm extends React.Component {

    constructor(props) {
    
        super(props);

        console.log(this.props)

        const {data} = this.props;

  
        this.state = {
        key: "xxxxxxxxxxxxxxxxxx",
        title: data.title,
        category: data.category,
        sub_category: data.sub_category,
        repo_link: data.repo_link,
        image: data.image, 
        description: data.description,
        description_sort: data.description_sort,
        published: data.published,
        html_content: data.html_content,
        post_body: data.post_body || [],
    
        };
  }

  handleFieldChange = (evt) =>{
    const { id, value } = evt.target;
    this.setState({ [id]: value });
  }

  handleChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...this.state.post_body];
    values[index][name] = value;
    console.log(index, name, value)
    this.setState({ post_body: [...values] });
  };

  addPostBody= () => {
    this.setState((prevState) => ({
      post_body: [
        ...prevState.post_body,
          { type: "",  
            caption: "", 
            content: [{data: "", tag:"code", "label": ""}], 
            toggle_to_show: false 
        }
      ]
    }));
  };



  removeContent = (index, event) => {
    let post_body = [...this.state.post_body];
    post_body.splice(index, 1);
    this.setState({ post_body });
  };

  handleContentChange = (pidx, idx) => (event) => {
    const values = [...this.state.post_body];
    values[pidx].content[idx][event.target.name] = event.target.value; 
    this.setState({ post_body: [...values] });
  };

  handleAddContent = (evt) => {
    

  let idx = parseInt(evt.target.value);
  const values = [...this.state.post_body];
  values[idx].content.push({data: "", tag: "code", label: ""});
  console.log(values)
  this.setState({ post_body: [...values] });

  };

  handleRemoveInnerContent = (pidx, idx) => () => {
    let post_body = this.state.post_body;
    let update_content = post_body[pidx].content.filter((s, sidx) => idx !== sidx)
    post_body[pidx].content = [ ...update_content]
    
    this.setState({post_body: [...post_body]  });
  };

  isValidated() {
    return true;
  }


  render() {
    
    let { post_body } = this.state;


    return (
        
        <div>
          
          <p> <label htmlFor="title">title</label> <br />
          <input type="text" value={this.state.title} 
          placeholder="Post title"
           id="title" onChange={this.handleFieldChange} />
           </p>


           <p>
              <label htmlFor="html_content">Html Content</label> <br /> 
              <textarea rows={5} cols={50}
              placeholder="HTML Content"
              id="html_content" value={this.state.html_content}
              onChange={this.handleFieldChange}></textarea>
              </p>




          <p> <label htmlFor="repo_link">repo</label> <br />
          <input type="text" 
                value={this.state.repo_link} 
                id="repo_link" 
                placeholder="Repo"
                onChange={this.handleFieldChange} />
            </p>
          
          <p> <label htmlFor="type">category</label> <br />
          <input type="text"
                id="category"
                placeholder="Post Category"
                value={this.state.category}
                onChange={this.handleFieldChange}/>
          </p>

          <p> <label htmlFor="type">sub category</label> <br />
          <input type="text"
                id="sub_category"
                placeholder="Post Sub Category"
                value={this.state.sub_category}
                onChange={this.handleFieldChange}/>
          </p>


          

          <p><label htmlFor="image">image</label> <br />
          <input type="text"
            id="image"
            placeholder="Image"
            value={this.state.image}
            onChange={this.handleFieldChange}/>
          </p>
          
          <p><label htmlFor="description_sort">Short Description</label> <br /> 
          <input type="text"
              id="description_sort"
              placeholder="Sort Description"
              value={this.state.description_sort}
              onChange={this.handleFieldChange}/>
            </p>
                  
            <p>
              <label htmlFor="description">Description</label> <br /> 
              <textarea rows={5} cols={50}
              placeholder="Long Description"
              id="description" value={this.state.description}
              onChange={this.handleFieldChange}></textarea>
              </p>
              

          {post_body.map((val, idx) => {

            console.log(val)

            if (val.content == undefined){
                val.content = []
            }

            return (
              <div key={idx} style={{background: "#333", borderRadius: "5px", padding: "5px"}}>
                 <h4>Body {idx + 1}</h4>


                 <select type="text"
                      name="type"
                      placeholder="Type"
                      value={val.type}
                      onChange={(event) => this.handleChange(idx, event)}>
                      
                      
                      <option value="paragraph">paragraph</option>
                      <option value="tabs">tabs</option>
                      <option value="youtube">youtube video</option>
                      <option value="html">html</option>
                      <option value="code">code</option>
                        
                      </select>  

                 <br />
                 <input type="text"
                      name="caption"
                      placeholder="Caption"
                      value={val.caption}
                      onChange={(event) => this.handleChange(idx, event)}/>  

                    <br />
                    {console.log(typeof(val.content))}

                      {val.content.map((content, index) => {
                        return (
                            <div key={`post_body_${index}_content`} >
                            
                            <input type="text" name="label" 
                            placeholder="Lable" value={content.label} onChange={this.handleContentChange(idx, index)} />
                            <br />
                            <input type="text"
                              name="tag"
                              placeholder={`Content #${index + 1} tag`}
                              value={content.tag}
                              onChange={this.handleContentChange(idx, index)} />

                              <br />



                            <textarea
                            rows={5} cols={50}
                              name="data"
                              placeholder={`Content #${index + 1} data`}
                              value={content.data}
                              onChange={this.handleContentChange(idx, index)}></textarea>
                              <br />
                            
                            <button onClick={this.handleRemoveInnerContent(idx, index)}> - </button>

                            <hr />
                          
                            
                            </div>
                        );
                      })}

                    


                    <p>
                      
                    <button type="button" 
                    value={idx}
                    onClick={this.handleAddContent}> + </button>

                    <button onClick={(event) => this.removeContent(idx, event)}>Remove All Body</button>

                    </p>
 
            </div>
            );
          })}


          <div>
            <button onClick={this.addPostBody}>Add Post Body</button>
          </div> 
        
          <br />
          <div>
            <input type="text" id="key" value={this.state.key} onChange={this.handleFieldChange} />
            <button onClick={()=>this.props.submitHandler(this.state)} >Submit</button>
          </div>
          
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </div>
    );
  }
}

export default PostForm;