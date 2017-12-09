import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return <footer id="main-footer" class="py-5 bg-primary text-white">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6 ml-auto">
                        <p class="lead">Copyright &copy; 2017</p>
                    </div>
                </div>
            </div>
        </footer>
    }
}
