
class Clip {

  constructor (options: any, callback: any, thisInstance?: any) {

    return () => {
      return callback.bind(options).apply(thisInstance || {})
    };
  }

  m () {

  }

}


