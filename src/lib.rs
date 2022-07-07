extern crate url;
use neon::prelude::*;
use url::Url;

fn get_query(mut cx: FunctionContext) -> JsResult<JsString> {
    let my_url = cx.argument::<JsString>(0)?.value(&mut cx);
    let parsed_url = Url::parse(&my_url).unwrap();
    Ok(cx.string(parsed_url.query().unwrap_or("")))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("getQuery", get_query)?;
    Ok(())
}
