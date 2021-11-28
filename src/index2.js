import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const bag = "labalaba";

const App = () => {
    return (
        <div className="ui container comments">


            <ApprovalCard>
            <CommentDetail name='James' caption='Yaaay' date="Today at 1pm" image={Faker.image.avatar()}/>
            </ApprovalCard>
            <CommentDetail name='Bassey' caption='Boo' date="Yesterday at noon" image={Faker.image.avatar()}/>
            <CommentDetail name={bag} caption='haba' date="Last week monday" image={Faker.image.avatar()}/>
            

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));