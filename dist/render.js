
class Renderer { 
  constructor(){
    this.source = $('#players-template').html();
    this.template = Handlebars.compile(this.source);
  }
  render(players){
    $('#players-container').empty()
    const newHTML = this.template({ players });
    $('#players-container').append(newHTML);  
  }
}
