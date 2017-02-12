using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DeepakSignalR.Startup))]
namespace DeepakSignalR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);


        }
    }
}
