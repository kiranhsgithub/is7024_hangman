namespace Hangman.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Hangman.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "Hangman.Models.ApplicationDbContext";
        }

        protected override void Seed(Hangman.Models.ApplicationDbContext context)
        {
            // ADD ROLE NAMES IN THIS SECTION. YOU DO NOT HAVE TO USE THE 3 PROVIDED
            // HERE AND CAN USE ROLE NAMES THAT ARE APPROPRIATE FOR YOUR APPLICATION
            var roles = new[]
            {
                "Admin",
                "Player",
                "PremiumPlayer"
            };

            // USE THE FOLLOWING PATTERN TO ADD DEFAULT USERS TO YOUR SYSTEM
            // ROLES CAN BE COMMA SEPERATED TO ADD MULTIPLE ROLES
            // ROLES PROVIDED MUST EXIST IN THE LIST ABOVE
            var users = new[]
            {
                new {Email = "admin@hangman.com", Pwd = "Password123", Roles = "Admin"},
                new {Email = "player@hangman.com", Pwd = "Password123", Roles = "Player"},
                new {Email = "premium@hangman.com", Pwd = "Password123", Roles = "PremiumPlayer"}

            };

            // DO NOT MODIFY THE CODE BELOW THIS LINE
            roles.ToList().ForEach(r => context.Roles.AddOrUpdate(x => x.Name,
                new Microsoft.AspNet.Identity.EntityFramework.IdentityRole { Id = Guid.NewGuid().ToString(), Name = r }));
            foreach (var user in users)
            {
                ApplicationUserManager mgr = new ApplicationUserManager(
                    new Microsoft.AspNet.Identity.EntityFramework.UserStore<Models.ApplicationUser>(context));
                Models.ApplicationUser existingUser = context.Users.FirstOrDefault(x => x.UserName == user.Email);
                if (existingUser != null) Microsoft.AspNet.Identity.UserManagerExtensions.Delete(mgr, existingUser);
                Models.ApplicationUser au = new Models.ApplicationUser { Email = user.Email, UserName = user.Email };
                var result = mgr.CreateAsync(au, user.Pwd).Result;
                if (!string.IsNullOrEmpty(user.Roles))
                    Microsoft.AspNet.Identity.UserManagerExtensions.AddToRoles(mgr, au.Id, user.Roles.Split(','));
            }
        }
    }
}
