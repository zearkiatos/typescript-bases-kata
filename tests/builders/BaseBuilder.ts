class BaseBuilder {
    build (): any {
      return Object.keys(this).reduce((obj, key) => {
        obj[key] = this[key]
        return obj
      }, {})
    }
  
    withParam (paramName, value): BaseBuilder {
      if (Object.keys(this).indexOf(paramName) !== -1) { this[paramName] = value }
      return this
    }
  }
  
  export default BaseBuilder