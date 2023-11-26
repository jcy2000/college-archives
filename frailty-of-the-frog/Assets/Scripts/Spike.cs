using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D), typeof(Collider2D))]
public class Spike : MonoBehaviour
{
    Attack myScript;
    bool dealtDamage = false;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (myScript == null)
            return;

        if (!dealtDamage)
        {
            if (collision.GetComponent<PlayerHealth>() || collision.GetComponent<EnemyHealth>())
            {
                dealtDamage = true;
                myScript?.DealDamage(collision.GetComponent<Health>());
            }

            if (collision != myScript.GetComponent<Collider2D>() && !collision.CompareTag("CheckPoint"))
            {
                if (myScript) myScript.returnToPool(gameObject);
                else Destroy(gameObject);
            }
            else Physics2D.IgnoreCollision(GetComponent<Collider2D>(), collision);
        }
    }

    public void disableReturn()
    {
        myScript = null;
    }
}