namespace TreningsAppTest.Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;

        public DateTime CreatedAt { get; set; }


    }
}
