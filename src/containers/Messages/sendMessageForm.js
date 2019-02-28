import React from 'react';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import TextareaAutosize from 'react-autosize-textarea';
import classes from './sendMessage.module.css';

export default class SendMessage extends React.Component {
  state = {
      message: '',
      showEmojis: false,
  }

  handleChange = (e) => { // обновление состояния после ввода сообщения
      this.setState({
          message: e.target.value,
      });
  }

  handleSubmitForm = (e) => {
      e.preventDefault();
      if (this.state.message) {
          this.props.sendMessage(this.state.message); // метод отправки сообщения (в messageForm)
          this.setState({
              message: '',
          });
      }
  }

  handleSubmit = (e) => {
      // e.preventDefault();
      if (this.state.message) {
          this.props.sendMessage(this.state.message); // метод отправки сообщения (в messageForm)
          this.setState({
              message: '',
          });
      }
  }

  showEmojis = (e) => {
      this.setState({
          showEmojis: true,
      }, () => document.addEventListener('click', this.closeMenu));
  }

  closeMenu = (e) => {
      // console.log(this.emojiPicker);
      if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
          this.setState({
              showEmojis: false,
          }, () => document.removeEventListener('click', this.closeMenu));
      }
  }

  addEmoji = (e) => {
      // console.log(e.unified)
      if (e.unified.length <= 5) {
          const emojiPic = String.fromCodePoint(`0x${e.unified}`);
          this.setState({
              message: `${this.state.message} ${emojiPic}`,
          });
      } else {
          const sym = e.unified.split('-');
          const codesArray = [];
          sym.forEach(el => codesArray.push(`0x${el}`));
          const emojiPic = String.fromCodePoint(...codesArray);
          this.setState({
              message: `${this.state.message} ${emojiPic}`,
          });
      }
  }

  keydown = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
          event.stopPropagation();
      } else if (event.keyCode === 13) {
          this.handleSubmit();
          event.preventDefault();
      }
  }

  render() {
      return (
          <div className={classes.Main}>
              <button type='submit' className={classes.clip}><i className='fa fa-paperclip fa-2x' /></button>

              <form
                  onSubmit={this.handleSubmitForm}
                  className={classes.Form}
              >
                  {/*          <input
          className={classes.input}
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Введите сообщение"
            type="text" /> */}
                  <TextareaAutosize
                      onKeyDown={this.keydown}
                      id='textarea'
                      className={classes.input}
                      onChange={this.handleChange} // отслеживание ввода сообщения
                      placeholder='Введите сообщение'
                      value={this.state.message}
                      rows={1}
                  />

                  <button type='submit' className={classes.btn}><i className='fas fa-paper-plane' /></button>
                  <div>
                      <button type='button' className={classes.smile} onClick={this.showEmojis}><i className='far fa-smile fa-2x' /></button>
                      {
                          this.state.showEmojis
                              ? (
                                  <div className={classes.EmojisForm} ref={el => (this.emojiPicker = el)}>
                                      <Picker onSelect={this.addEmoji} />
                                  </div>
                              )
                              : <p onClick={this.showEmojis} />
                      }
                  </div>
              </form>
          </div>
      );
  }
}
