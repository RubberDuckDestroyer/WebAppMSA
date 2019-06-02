import * as React from 'react';
import ReactDropzone from 'react-dropzone';
import './DropArea.css'

interface IState{
    imagefiles: any[],
    dropzone: any
}

interface IProps{
    setResults: any}

export default class DropArea extends React.Component<IPpops, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            imageFiles[],
            dropzone: this.onDrop.bind(this)
        };
    }
}

public onDrop(files: any) {
    this.setState({
        imageFiles: files,
    })
    this.props.setResults("",this.state.imageFiles.length)
    const file = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
        const binaryString = (event.target as FileReader).result;
        if (typeof binaryString === "string") {
            this.upload(btoa(binaryString))
        }
    };
    try{
        reader.readAsBinaryString(file);
    }catch(error){
        this.props.setResults("Sorry we had trouble loading that file please use a downloaded image file",0);
    }
}
