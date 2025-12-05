import styled from 'styled-components';

export const OurPromiseStyle = styled.div`

padding: 0rem;

.ourpromise{
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1800px;
    margin: 1rem auto;
    border-radius: 10px;
}

.title{
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
}

.sub_title{
    font-size: 18px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
}

.element{
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.element_item{
border-top: 4px solid;
    display: flex;
    max-width: 350px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
}

.item{
    display: flex;
    align-items: center;
    gap: 17px;
}

.item_title{
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
}

.element_content{
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);
}

`;