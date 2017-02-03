let dependencies = {};

export default class Injector {


    static inject(injectableArgs) {

       let dependency = injectableArgs[0];
       let dependencyName = injectableArgs[0].name.uncapitalize();
       let fnArgs = [];
       let injectFn = null;

       if (injectableArgs.length == 1) {
          injectFn = () => { return new injectableArgs[0](); }
       }

       dependencies[dependencyName] = injectFn.apply(this,fnArgs);
    }

    static get(key) {
      return dependencies[key];
    }

    static get allDependencies() {
      return dependencies;
    }
}
